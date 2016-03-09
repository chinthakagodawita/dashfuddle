import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service('session'),
  selectedProject: null,
  selectedTicket: null,
  tickets: null,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    selectProject(project) {
      this.set('selectedProject', project);
      this.set('selectedTicket', null);
      this.set('tickets', this.store.query('unfuddleTicket', {
        projectId: project.get('id')
      }));
    },
    selectTicket(ticket) {
      this.set('selectedTicket', ticket);
    }
  }
});
