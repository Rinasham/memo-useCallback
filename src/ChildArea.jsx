import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("子コンポーネントがレンダリングされた");

  const style = {
    width: "100%",
    backgroundColor: "#50A3A2",
    color: "white"
  };

  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child Component</p>
          <button onClick={onClickClose}>Close</button>
        </div>
      ) : null}
    </>
  );
});
