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
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了機能

    //未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    //追加リスト生成
    //p生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //list生成
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除機能
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //list生成
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了からリストを削除
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
