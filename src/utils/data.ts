const FORM_ID = 'formId';

function getFormId(): number {
  const str = localStorage.getItem(FORM_ID);
  if (str) return parseInt(str, 10);
  return 100;
}

function saveFormId(id: number): void {
  localStorage.setItem(FORM_ID, `${id}`);
}

export {
  saveFormId,
  getFormId,
};
