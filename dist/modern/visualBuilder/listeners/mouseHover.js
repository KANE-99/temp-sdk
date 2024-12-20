import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/listeners/mouseHover.ts
import { throttle } from "lodash-es";
import { getCsDataOfElement } from "../utils/getCsDataOfElement.js";
import { removeAddInstanceButtons } from "../utils/multipleElementAddButton.js";
import { generateCustomCursor } from "../generators/generateCustomCursor.js";
import { FieldSchemaMap } from "../utils/fieldSchemaMap.js";
import { isFieldDisabled } from "../utils/isFieldDisabled.js";
import { getFieldType } from "../utils/getFieldType.js";
import { VisualBuilder } from "../index.js";
import { addHoverOutline } from "../generators/generateHoverOutline.js";
import { visualBuilderStyles } from "../visualBuilder.style.js";
function resetCustomCursor(customCursor) {
  if (customCursor) {
    generateCustomCursor({
      fieldType: "empty",
      customCursor
    });
  }
}
function handleCursorPosition(event, customCursor) {
  if (customCursor) {
    const mouseY = event.clientY;
    const mouseX = event.clientX;
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
  }
}
function addOutline(editableElement, isFieldDisabled2) {
  if (!editableElement) return;
  addHoverOutline(editableElement, isFieldDisabled2);
}
function hideDefaultCursor() {
  if (document?.body && !document.body.classList.contains(
    visualBuilderStyles()["visual-builder__default-cursor--disabled"]
  ))
    document.body.classList.add(
      visualBuilderStyles()["visual-builder__default-cursor--disabled"]
    );
}
function showDefaultCursor() {
  if (document?.body && document.body.classList.contains(
    visualBuilderStyles()["visual-builder__default-cursor--disabled"]
  ))
    document.body.classList.remove(
      visualBuilderStyles()["visual-builder__default-cursor--disabled"]
    );
}
function hideHoverOutline(visualBuilderContainer) {
  if (!visualBuilderContainer) {
    return;
  }
  const hoverOutline = visualBuilderContainer.querySelector(
    ".visual-builder__hover-outline"
  );
  if (!hoverOutline) {
    return;
  }
  hoverOutline.classList.add(
    visualBuilderStyles()["visual-builder__hover-outline--hidden"]
  );
}
function hideCustomCursor(customCursor) {
  showDefaultCursor();
  customCursor?.classList.remove("visible");
}
function showCustomCursor(customCursor) {
  hideDefaultCursor();
  customCursor?.classList.add("visible");
}
function isOverlay(target) {
  return target.classList.contains("visual-builder__overlay");
}
function isContentEditable(target) {
  if (target.hasAttribute("contenteditable"))
    return target.getAttribute("contenteditable") === "true";
  return false;
}
async function handleMouseHover(params) {
  throttle(async (params2) => {
    const eventDetails = getCsDataOfElement(params2.event);
    const eventTarget = params2.event.target;
    if (!eventDetails) {
      if (eventTarget && (isOverlay(eventTarget) || isContentEditable(eventTarget))) {
        hideCustomCursor(params2.customCursor);
        return;
      }
      resetCustomCursor(params2.customCursor);
      removeAddInstanceButtons({
        eventTarget: params2.event.target,
        visualBuilderContainer: params2.visualBuilderContainer,
        overlayWrapper: params2.overlayWrapper
      });
      handleCursorPosition(params2.event, params2.customCursor);
      return;
    }
    const { editableElement, fieldMetadata } = eventDetails;
    const { content_type_uid, fieldPath } = fieldMetadata;
    if (VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM && VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM.isSameNode(
      editableElement
    )) {
      hideCustomCursor(params2.customCursor);
      return;
    }
    if (params2.customCursor) {
      const elementUnderCursor = document.elementFromPoint(params2.event.clientX, params2.event.clientY);
      if (elementUnderCursor) {
        if (elementUnderCursor.nodeName === "A" || elementUnderCursor.nodeName === "BUTTON") {
          elementUnderCursor.classList.add(
            visualBuilderStyles()["visual-builder__no-cursor-style"]
          );
        }
      }
      if (VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM !== editableElement) {
        resetCustomCursor(params2.customCursor);
        removeAddInstanceButtons({
          eventTarget: params2.event.target,
          visualBuilderContainer: params2.visualBuilderContainer,
          overlayWrapper: params2.overlayWrapper
        });
      }
      if (!FieldSchemaMap.hasFieldSchema(content_type_uid, fieldPath)) {
        generateCustomCursor({
          fieldType: "loading",
          customCursor: params2.customCursor
        });
      }
      FieldSchemaMap.getFieldSchema(content_type_uid, fieldPath).then(
        (fieldSchema) => {
          if (!fieldSchema) return;
          if (!params2.customCursor) return;
          const { isDisabled: fieldDisabled } = isFieldDisabled(
            fieldSchema,
            eventDetails
          );
          const fieldType = getFieldType(fieldSchema);
          generateCustomCursor({
            fieldType,
            customCursor: params2.customCursor,
            fieldDisabled
          });
        }
      );
      handleCursorPosition(params2.event, params2.customCursor);
      showCustomCursor(params2.customCursor);
    }
    if (!editableElement.classList.contains(
      "visual-builder__empty-block-parent"
    ) && !editableElement.classList.contains("visual-builder__empty-block")) {
      addOutline(editableElement);
      FieldSchemaMap.getFieldSchema(content_type_uid, fieldPath).then(
        (fieldSchema) => {
          if (!fieldSchema) return;
          const { isDisabled: fieldDisabled, reason } = isFieldDisabled(fieldSchema, eventDetails);
          addOutline(editableElement, fieldDisabled);
        }
      );
    }
    if (VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM === editableElement) {
      return;
    }
    VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM = editableElement;
  }, 10)(params);
}
var mouseHover_default = handleMouseHover;
export {
  mouseHover_default as default,
  hideCustomCursor,
  hideHoverOutline,
  showCustomCursor
};
//# sourceMappingURL=mouseHover.js.map