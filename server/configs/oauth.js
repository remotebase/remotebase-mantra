import {Meteor} from 'meteor/meteor';
import {ServiceConfiguration} from 'meteor/service-configuration';

export function configureOauth() {
  ServiceConfiguration.configurations.upsert(
    {service: 'twitter'},
    {
      $set: {
        consumerKey: Meteor.settings.public.TwitterConsumerKey,
        secret: Meteor.settings.TwitterConsumerSecret
      }
    }
  );
}
