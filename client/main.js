import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {configureVerification} from './configs/accounts';

// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';
import userModule from './modules/user';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(userModule);
app.init();

configureVerification();
