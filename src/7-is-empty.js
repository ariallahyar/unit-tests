export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if ( 
    stringArrayOrObject === '' || 
    stringArrayOrObject.length === 0 || 
    Object.keys(stringArrayOrObject).length === 0 && stringArrayOrObject.constructor === Object
    ){
    return true;
  }
  return false;
}
