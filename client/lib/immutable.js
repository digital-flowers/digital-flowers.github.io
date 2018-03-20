import {fromJS, Iterable, Record, Seq} from "immutable";

export const recordFromJS = (js = {}) => {
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
    console.log(js, e);
  }
};


/**
 * convert javascript object to immutable map
 * @param js
 * @return {*}
 */
export const mapFromJS = js => fromJS(js || {});


/**
 * convert javascript object to immutable record
 * @return {*}
 * @param record
 */
export const mapFromRecord = record => mapFromJS(record && record.toJS ? record.toJS() : record || {});


/**
 * Deep marge record
 */

export const mergeDeepRecord = (record, data) => recordFromJS(mapFromRecord(record).mergeDeep(mapFromRecord(data)).toJS());

/**
 * remove pending state from state pending array
 * @param state
 * @param id
 */
export const removeStateStatus = (state, id) => state.set("status", state.status.filter(item => item.id !== id));

/**
 * push state status into state status array
 * @param state
 * @param id
 * @param {string} status
 * @param {Object} data
 */
export const setStateStatus = (state, id, status, data = {}) => state.set("status", state.status
  .filter(item => item.id !== id)
  .push(recordFromJS({id, status, data})));

/**
 * remove state status from state status array using statusCode
 * @param state
 * @param statusCode
 */
export const removeStateStatusByCode = (state, statusCode) => state.set("status", state.status
  .filter(item => !(item.data && item.data && item.data.status === statusCode)));
