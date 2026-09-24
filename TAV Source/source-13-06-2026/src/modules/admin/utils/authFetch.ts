import { OptionDeployBe } from "@type/optionDeployBe";

export async function authFetch(url: string, options: RequestInit = {}) {
  const accessToken = localStorage.getItem("accessToken");

  let res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  // Nếu accessToken hết hạn
  if (res.status === 401 || res.status === 403) {
    const refreshToken = localStorage.getItem("refreshToken");

    const refreshRes = await fetch(
      `${OptionDeployBe.DEPLOY_DEPLOY}api/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (refreshRes.ok) {
      const newTokenData = await refreshRes.json();
      localStorage.setItem("accessToken", newTokenData.accessToken);
      localStorage.setItem("refreshToken", newTokenData.refreshToken);

      console.log("🔁 Token đã được refresh");

      // Gọi lại request ban đầu với token mới
      res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${newTokenData.accessToken}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      // Refresh token cũng hết hạn
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/auth/sign-in";
      throw new Error("Phiên đăng nhập đã hết hạn.");
    }
  }

  return res;
}
