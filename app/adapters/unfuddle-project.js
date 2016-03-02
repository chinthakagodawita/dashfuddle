import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType() {
    // As per https://unfuddle.com/stack/docs/api/projects/.
    return 'projects';
  }
});
