export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value => value && value.length > max ? `Max length is ${max} symbols` : undefined
export const maxLength1500 = maxLength(1500)
export const maxLength24 = maxLength(24)

const minLegth = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLegth(2)
export const minLength4 = minLegth(4)

