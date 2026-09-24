import { authFetch } from "@modules/admin/utils/authFetch";
import http from "@utils/http";
import { OptionDeployBe } from "@type/optionDeployBe";

//home
export const GetHomepage = () => http.get<any>(`/api/homepage`);
export const UpdateHomepage = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/homepage/6836ba14010ca5e2c52c33d0`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//home ready
export const GetHomeReady = () => http.get<any>(`api/home-ready`);
export const UpdateHomeReady = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/home-ready/682549000e0c70cf6f14715b`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//introduce
//1
export const GetIntroduce1 = () => http.get<any>(`/api/first-introduce`);
export const UpdateIntroduce1 = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/first-introduce/6836d9f43406f2e18e5e8d21`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//2
export const GetIntroduce2 = () => http.get<any>(`/api/second-introduce`);
// export const PostIntroduce2 = (data: any) =>
//   http.post<any>(`/api/second-introduce`, data);
export const PostIntroduce2 = async (data: any) => {
  await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/second-introduce`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const UpdateIntroduce2 = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/second-introduce/${data._id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
export const DeleteIntroduce2 = async (_id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/second-introduce/${_id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};

//3
export const GetIntroduce3 = () => http.get<any>(`/api/last-introduce`);
export const UpdateIntroduce3 = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/last-introduce/6823157ccc5a24964b1e550e`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//Our Service
export const GetOurServiceHeader = () => http.get<any>(`/api/our-services`);
export const GetService = () => http.get<any>(`/api/services`);
export const PostService = async (data: any) => {
  const res = await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/services`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
export const DeleteService = async (id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/services/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};
export const UpdateService = async (id: string, data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/services/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//AboutUs
export const GetIntroduce = () => http.get<any>(`/api/about-us`);
export const UpdateIntroduce = async (data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/about-us/6837e190e9d301fa63d7c8e5`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//BoardsDirectors
export const GetBoardsDirectors = () => http.get<any>(`/api/boards-director`);
export const UpdateBoardsDirectors = async (_id: string, data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/boards-director/${_id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
export const DeleteBoardsDirectors = async (_id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/boards-director/${_id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};
// export const PostBoardsDirectors = (data: any) =>
//   http.post<any>(`/api/boards-director`, data);
export const PostBoardsDirectors = async (data: any) => {
  await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/boards-director`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
//Staff
export const GetStaff = () => http.get<any>(`/api/staff`);
export const UpdateStaff = async (_id: string, data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/staff/${_id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
export const DeleteStaff = async (_id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/staff/${_id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};
// export const PostStaff = (data: any) => http.post<any>(`/api/staff`, data);
export const PostStaff = async (data: any) => {
  await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/staff`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
//products

export const GetProductByService = (id: string) =>
  http.get<any>(`/api/products/service/${id}`);
export const GetProducts = () => http.get<any>(`/api/products/homepage`);

// export const CreateProduct = (data: any, config?: any) =>
//   http.post<any>(`/api/products`, data, config);
export const CreateProduct = async (data: any) => {
  await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
export const DeleteProduct = async (id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/products/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};
export const UpdateProduct = async (_id: string, data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/products/${_id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//3dmapping
export const Get3DMapping = () =>
  http.get<any>(`/api/products/service/6837c56189fc431d04f97d8e`);

//3drender
export const Get3DRender = () =>
  http.get<any>(`/api/products/service-show/6837c64289fc431d04f97d90`);
export const Get3DRenderCG = () =>
  http.get<any>(`/api/products/subService/6824150de3b8c1231e147941`);

export const GetInterior = () =>
  http.get<any>(`/api/products/by-serviceoption-name/interior`);

export const GetExterior = () =>
  http.get<any>(`/api/products/by-serviceoption-name/Exterior`);

export const GetTourVr360 = () =>
  http.get<any>(`/api/products/by-serviceoption-name/Tour Vr360`);

export const GetRenderCG = () =>
  http.get<any>(`/api/sub-services/6824150de3b8c1231e147941`);
export const GetRenderCGType = () => http.get<any>(`/api/sub-service-options`);

//3dmodel
export const Get3DModel = () =>
  http.get<any>(`/api/products/service/6837c76089fc431d04f97d9e`);

//interactive app
export const GetInteractiveApp = () =>
  http.get<any>(`/api/products/service/6837c8ca89fc431d04f97dba`);

//blog
export const GetBlogs = () => http.get<any>(`/api/blogs`);
export const GetBlogsAll = () => http.get<any>(`/api/blogs/all`);
// export const CreateBlog = (data: any) =>
//   http.post<any>(`/api/blogs/add-blog`, data);
export const CreateBlog = async (data: any) => {
  await authFetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/blogs/add-blog`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
export const DeleteBlog = async (id: string) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/blogs/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Xoá thất bại");
  }

  return res.json();
};
export const UpdateBlog = async (id: string, data: any) => {
  const res = await authFetch(
    `${OptionDeployBe.DEPLOY_DEPLOY}api/blogs/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Cập nhật thất bại");
  }

  return res.json();
};
//blog category
export const GetBlogCategories = () => http.get<any>(`/api/blog-category`);
