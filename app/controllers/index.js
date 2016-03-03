import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service('session'),
  selectedProject: null,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    selectProject(project) {
      this.set('selectedProject', project);
    }
  }
});
