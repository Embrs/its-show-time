import { message } from "ant-design-vue";

// 複製字串流程 (主要複製字串,複製項目名稱)
export const CopyString = (copyString = "", copyMessage = copyString) => {
  // 檢查是否參數為空
  const copyStringEmpty = copyString === "";
  ShowMessage(copyStringEmpty, copyMessage);
  if (copyStringEmpty) return;
  // 創建複製到剪貼簿
  CreateCopyBoard(copyString);
};

// 顯示複製訊息
const ShowMessage = (isEmpty: boolean, copyMessage: string) => {
  if (isEmpty) {
    message.error({
      content: `複製${copyMessage}失敗`,
      duration: 2
    });
    return;
  }
  message.success({
    content: `複製${copyMessage}成功`,
    duration: 2
  });
};

// 創建複製剪貼簿
export const CreateCopyBoard = (copyString: string) => {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = copyString;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};
