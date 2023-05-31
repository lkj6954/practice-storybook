import { ButtonCustom } from './ButtonCustom';

export default {
    title: 'Example/ButtonCustom',
    component: ButtonCustom,
    tags: ['autodocs'],
};

export const Active = {
    args: {
        label: 'Active',
        active: true,
    },
};

export const Inactive = {
    args: {
        label: 'Inactive',
        active: false,
    },
};
