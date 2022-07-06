import templateImg from "../../../images/template.png";
import elementsImg from "../../../images/elements.png";
import imageImg from "../../../images/image.png";
import textImg from "../../../images/text.png";

function useEditMenuBar({ setMenuBtnStatus, setSelectState }) {
  const content = [
    { name: "templates", src: templateImg },
    { name: "elements", src: elementsImg },
    { name: "image", src: imageImg },
    { name: "text", src: textImg },
  ];

  function getMenus() {
    return content.map((el) => {
      return {
        id: `menuBar-${el.name}-box`,
        imgId: `menuBar-${el.name}`,
        imgAlt: `${el.name}Img`,
        src: el.src,
      };
    });
  }

  function handleClick(id) {
    setMenuBtnStatus(id);
    setSelectState(false);
  }

  return { models: { menus: getMenus() }, operations: { handleClick } };
}

export default useEditMenuBar;
