import { SyntheticEvent } from 'react';

export const getFormFields = (event: SyntheticEvent) => Array.prototype
    .slice
    .call(event?.target)
    .filter(el => el.name)
    .reduce((form, el) => ({ ...form, [el.name]: el.value }), {});
