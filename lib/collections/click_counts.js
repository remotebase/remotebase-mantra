import {Mongo} from 'meteor/mongo';


const ClickCounts = new Mongo.Collection('click_counts');

export default ClickCounts;
