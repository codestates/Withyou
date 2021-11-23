import React, { useState } from 'react';
import Template from '../components/modals/edit/Template';
import Image from '../components/modals/edit/Image';
import Elements from '../components/modals/edit/Elements';
import Text from '../components/modals/edit/Text';
import templateImg from '../images/template.png';
import elementsImg from '../images/elements.png';
import imageImg from '../images/image.png';
import textImg from '../images/text.png';
import '../css/EditPage.css';
import ImageOnCanvas from '../components/modals/edit/ImageOnCanvas';
import ImageProperty from '../components/modals/edit/ImageProperty';

export default function EditPage() {
  // * 나중에 함수, 상태들 이름 정리한번 싹 하기 --> 직관적으로 알 수 있도록
  const [itemStates, setItemStates] = useState([]);
  const [selectState, setSelectState] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [menuBtnStatus, setMenuBtnStatus] = useState("menuBar-template");
  const [contemporaryZIndex, setcontemporaryZIndex] = useState(0);
  const [initLocation, setInitLocation] = useState({ x: 0, y: 0 });
  const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 });
  // 가장 위로 올리려면, 현재 인덱스중 가장 높은 놈으로 만들어주면 된다.

  function onSelect(index) {
    setSelectState(true);
    const nextState = [...itemStates];
    nextState[index].isSelected = true;
    setcontemporaryZIndex(nextState[index].style.zIndex);
    nextState[index].style.zIndex = 1000;
    setItemStates(nextState);
    getSelectedItemInfo();
  }

  function onDeselect(index) {
    setSelectState(false);
    const nextState = [...itemStates];
    nextState[index].isSelected = false;
    nextState[index].style.zIndex = contemporaryZIndex;
    setItemStates(nextState);
  }

  function getSelectedItemInfo() {
    const itemInfo = itemStates.filter((el) => el.isSelected === true);
    setSelectedItem(itemInfo.shift().style);
  }

  function resizeWidth(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].style.width = input;
    setItemStates(nextState);
  }

  function resizeHeight(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].style.height = input;
    setItemStates(nextState);
  }

  function rotateObject(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].style.transform = input;
    setItemStates(nextState);
  }

  function modifyZindex(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].zIndex = input;
    setcontemporaryZIndex(input);
  }

  function removeObject() {
    const removedItems = itemStates.filter((el) => el.isSelected !== true);
    setItemStates(removedItems);
    setSelectState(false);
  }

  const { clientWidth } = document.body;

  function addToItems(src) {
    const canvas = document.querySelector('#canvas').getBoundingClientRect();
    console.log(canvas);
    setItemStates((prevState) => {
      return [
        ...prevState,
        {
          id: makeId(),
          src,
          // TODO : 작은화면에서 출력한 경우, 큰 화면으로 어떻게 가져올까?
          // 작은 화면과 큰 화면의 비율을 맞춰야 할 것 같음
          style: {
            position: 'absolute',
            width: canvas.width / 5,
            top: canvas.y + canvas.height / 3,
            left: canvas.x + canvas.width / 3,
            transform: 'rotate(0deg)',
          },
      } else {
        return [
          ...prevState,
          {
            id: makeId(),
            src,
            style: {
              position: "absolute",
              zIndex: itemStates.length,
              width: canvas.width / 3,
              height: canvas.height / 3,
              top: canvas.height / 2 - canvas.height / 5,
              left: canvas.width / 2 - canvas.width / 6,
              transform: "rotate(0deg)",
            },
            isSelected: false,
            isDragging: false,
          },
      }
    });
  }
  function resizeWidth(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].style.width = input;
    setItemStates(nextState);
  }

  function rotateObject(input) {
    const nextState = [...itemStates];
    const targetIndex = itemStates.findIndex((el) => el.isSelected === true);
    nextState[targetIndex].style.transform = input;
    setItemStates(nextState);
  }

  function removeObject() {
    window.onkeydown = (e) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const removedItems = itemStates.filter((el) => el.isSelected !== true);
        setItemStates(removedItems);
        setSelectState(false);
      }
    };
  }

  function makeId() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  window.onkeydown = (e) => {
    if (e.key === "Escape") {
      const index = itemStates.findIndex((el) => el.isSelected === true);
      if (index !== -1) {
        onDeselect(index);
      }
    }
  };

  function setMouseInitLocation(x, y) {
    setInitLocation({ x: x, y: y });
  }

  function setMouseCurrentLocation(x, y) {
    setCurrentLocation({ x: x, y: y });
  }
  return (
    
    <div id='EditPage'>
      <div id='sub-nav'>
        <div className='sub-nav-menus'>
          <div className='sub-nav-menu'>실행취소</div>
          <div className='sub-nav-menu'>되돌리기</div>
        </div>
        <div className='sub-nav-menu'>저장하기</div>
      </div>
      <div id='editScreen'>
        <div id='edit-property'>
          <div id='canvas'>
            {itemStates.map((el, i) => {
              return (
                <ImageOnCanvas
                  key={el.id}
                  src={el.src}
                  style={el.style}
                  isSelected={el.isSelected}
                  isDragging={el.isDragging}
                  onDragStart={() => {
                    const nextState = [...itemStates];
                    nextState[i].isDragging = true;
                    setItemStates(nextState);
                  }}
                  onDragEnd={() => {
                    const nextState = [...itemStates];
                    nextState[i].isDragging = false;
                    setItemStates(nextState);
                  }}
                  onSelect={() => onSelect(i)}
                  onDeselect={() => onDeselect(i)}
                  onChangeStyle={(nextStyle) => {
                    const nextState = [...itemStates];
                    nextState[i].style = {
                      ...nextState[i].style,
                      ...nextStyle,
                    };
                    setItemStates(nextState);
                  }}
                  clickSelected={clickSelected}
                  deClickSelected={deClickSelected}
                  selectState={selectState}
                />
              );
            })}
          </div>
          <div id='detail-propertys'>
            {selectState ? (
              <ImageProperty
                itemStates={itemStates}
                width={selectedItem.width}
                height={selectedItem.height}
                transform={selectedItem.transform}
                zindex={contemporaryZIndex}
                modifyZindex={modifyZindex}
                resizeWidth={resizeWidth}
                resizeHeight={resizeHeight}
                rotateObject={rotateObject}
                removeObject={removeObject}
              />
            ) : null}
            {templateStatus ? (
              <Template
                status={templateStatus}
                onClose={() => {
                  setTemplateStatus(false);
                }}
                addToItems={addToItems}
              />
            ) : null}
            {elementsStatus ? (
              <Elements
                status={elementsStatus}
                onClose={() => {
                  setElementsStatus(false);
                }}
                addToItems={addToItems}
              />
            ) : null}
            {imageStatus ? (
              <Image
                status={imageStatus}
                onClose={() => setImageStatus(false)}
                addToItems={addToItems}
              />
            ) : null}
            {textStatus ? (
              <Text
                status={textStatus}
                onClose={() => setTextStatus(false)}
                addToItems={addToItems}
              />
            ) : null}
          </div>
        </div>
        <div id='edit-tools'>
          <div id='buttons'>
            <div
              id='template'
              onClick={() => {
                setStateAll();
                setTemplateStatus(true);
              }}
            >
              {<img className='edit-button' src={templateImg} alt='#' />}
            </div>

            <div
              id='elements'
              onClick={() => {
                setStateAll();
                setElementsStatus(true);
              }}
            >
              {<img className='edit-button' src={elementsImg} alt='#' />}
            </div>

            <div
              id='iamge'
              onClick={() => {
                setStateAll();
                setImageStatus(true);
              }}
            >
              {<img className='edit-button' src={imageImg} alt='#' />}
            </div>

            <div
              id='text'
              onClick={() => {
                setStateAll();
                setTextStatus(true);
              }}
            >
              {<img className='edit-button' src={textImg} alt='#' />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
