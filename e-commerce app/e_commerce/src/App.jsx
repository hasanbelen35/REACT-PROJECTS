import React from "react";
import "./App.css";
import PageContainer from "./container/PageContainer.jsx";
import Header from "./components/Header.jsx";
import RouterConfig from "./config/RouterConfig.jsx";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "./redux/basketSlice.jsx";

function App() {
  const { products, drawer } = useSelector((store) => store.baskets);
  const dispatch = useDispatch();
  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Drawer
        className="drawer"
        sx={{ padding: "20px" }}
        open={drawer} // Bu sabit olarak true olarak ayarlandı, dinamik olmasını istiyorsanız bir state'e bağlamalısınız.
        anchor="right"
        onclose = {()=> dispatch(setDrawer())}
      >
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              style={{
                marginBottom: "25px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "100px" }}
                src={product.image}
                alt={product.title}
              />
              <p>{product.title}</p>
              <h3>{product.price}</h3>
              <button>sil</button>
            </div>
          ))}
      </Drawer>
    </PageContainer>
  );
}

export default App;
