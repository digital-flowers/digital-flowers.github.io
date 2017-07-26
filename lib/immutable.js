const {Iterable, Record, Seq, fromJS} = require("immutable");

/**
 * convert javascript object to immutable record
 * @param js
 * @return {*}
 */
const recordFromJS = (js = {}) => {
  try {
    if (typeof js !== 'object' || js === null) {
      return js;
    }

    if (Iterable.isIterable(js)) {
      return js;
    }

    // size is not a valid property in immutable js data structure
    if (js.size) {
      js._size = js.size;
      delete js.size;
    }

    if (Array.isArray(js)) {
      return Seq(js).map(recordFromJS).toList();
    }

    return new (Record(js))(Seq(js).map(recordFromJS));
  } catch (e) {
    console.log(e);
  }
};

/**
 * convert javascript object to immutable map
 * @param js
 * @return {*}
 */
const mapFromJS = js => fromJS(js || {});


/**
 * convert javascript object to immutable record
 * @return {*}
 * @param record
 */
const mapFromRecord = record => mapFromJS(record && record.toJS ? record.toJS() : {});


module.exports = {
  recordFromJS,
  mapFromJS,
  mapFromRecord
};
