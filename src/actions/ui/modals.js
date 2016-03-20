export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_ENABLE_CLOSE = 'MODAL_ENABLE_CLOSE';
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const MODAL_GO_BACK = 'MODAL_GO_BACK';

export function modalOpenInner(item) {
  return {
    type: MODAL_OPEN,
    item
  };
}

export function modalEnableClose() {
  return {
    type: MODAL_ENABLE_CLOSE
  };
}

export function modalOpen(item) {
  return dispatch => {
    dispatch(modalOpenInner(item));
    setTimeout(() => {
      dispatch(modalEnableClose());
    }, 500);
  };
}

export function modalClose() {
  return {
    type: MODAL_CLOSE
  };
}

export function modalGoBack(times) {
  const gobackTimes = typeof times === 'number' ? times : 1;
  return {
    type: MODAL_GO_BACK,
    times: gobackTimes
  };
}
