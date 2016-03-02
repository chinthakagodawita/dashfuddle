import DS from 'ember-data';

const { RESTSerializer, EmbeddedRecordsMixin } = DS;

export default RESTSerializer.extend(EmbeddedRecordsMixin, {
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {};

    newPayload[primaryModelClass.modelName] = payload;
    newPayload[primaryModelClass.modelName] = newPayload[primaryModelClass.modelName].filter(function(item) {
      return !item.archived;
    });
    // console.log(payload[0]);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
