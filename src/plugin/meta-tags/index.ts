// 插入 meta 方案
export default (app: any) => {
  app.mixin({
    // mounted() {
    //   // 在组件挂载后，可以访问到文档对象并进行头部和元标记的操作
    //   const metaTags = [
    //     { name: "viewport", content: "width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,viewport-fit=cover" }
    //     // 更多的头部和元标记...
    //   ];
    //   metaTags.forEach((metaTag) => {
    //     const meta = document.createElement("meta");
    //     Object.entries(metaTag).forEach(([key, value]) => {
    //       meta.setAttribute(key, value);
    //     });
    //     document.head.appendChild(meta);
    //   });
    // },
  });
};
