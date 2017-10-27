var recipes = {key:'value'};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object, {[key]});
  delete copy[key];
  return copy;
}


