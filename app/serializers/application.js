import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    let newPayload = {};

    newPayload[primaryModelClass.modelName] = payload;
    newPayload[primaryModelClass.modelName] = newPayload[primaryModelClass.modelName].filter(function(item) {
      return !item.archived;
    });
    console.log(payload[0]);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    // console.log('id', id);
    return this._super(...arguments);
  }
  // keyForRelationship(key, typeClass, method) {
  //   console.warn('keyfor', ...arguments);
  //   return this._super(...arguments);
  // }
});
