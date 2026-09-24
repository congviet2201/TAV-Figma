import { useState } from "react";
import First from "./components/first";
import { Button } from "@chakra-ui/react";
import Second from "./components/second";
import Thrid from "./components/thrid";

const Introduce = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "Introduce" : "Introduce"}
      </Button>
      {showForm && (
        <>
          <First />
          <Second />
          <Thrid />
        </>
      )}
    </>
  );
};

export default Introduce;
