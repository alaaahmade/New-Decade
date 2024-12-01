import * as yup from 'yup';

export const categorySchema = yup.object({

  description_fr: yup
    .string()
    .required('يجب ادخال وصف الصنف باللغة الفرنسية'),
  description_en: yup
    .string()
    .required('يجب ادخال وصف الصنف باللغة الانجليزية'),
  description_ar: yup
    .string()
    .required('يجب ادخال وصف الصنف باللغة العربية'),
  title_fr: yup
    .string()
    .required('يجب ادخال عنوان الصنف باللغة الفرنسية'),
  title_en: yup
  .string()
  .required('يجب ادخال عنوان الصنف باللغة الانجليزية'),
  title_ar: yup
  .string()
  .required('يجب ادخال عنوان الصنف باللغة العربية'),
  category: yup
    .string()
})