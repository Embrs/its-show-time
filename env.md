檢查process.cwd()路徑下.env.development.local、.env.development、.env.local、.env這四個環境文件。
輸出NODE_ENV和VITE_開頭的鍵值對。
VITE_開頭的鍵值對後面的不會覆蓋前面的。
NODE_ENV的值後面的會覆蓋前面的。