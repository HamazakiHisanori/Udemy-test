import "./styles.css";

const onClickAdd = () => {
  //要素取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list";

  //p作成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button生成

  //list生成
  li.appendChild(p);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
