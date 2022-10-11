export const saveJson = (
  data: any,
  link: HTMLAnchorElement | null,
  fileName: string = "data"
) => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);

  if (link) {
    link.href = href;
    link.download = fileName;
    link.click();
  }
};
