export function setName(name = '') {
  return {
    type: 'SET_NAME',
    name
  }
}

export function clearName() {
  return {
    type: 'CLEAR_NAME'
  }
}
