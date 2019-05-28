# anEntity
Redux model/middleware generator built on redux-recompose

An Entity is high level data model for Redux

By configuring a "schema" and "adapter" you can generate an easy to use structure without unncessary boilerplate

Define it:
```javascript
const entitySchemas = [{
  adapter: 'accounts',
  actions: ['CREATE', 'READ'],
  schema: {
    id: '',
    name: '',
    active: false,
    activeAt: Date,
    createdAt: Date,
    updatedAt: Date,
  },
}];

export default entitySchemas;

```

Use it: 
```javascript
// Dispatchable Action creators to hydrate the store.
import { entities } from '/lib/entityService';

entities.accounts.create() // Built in validation against schema
entities.accounts.read(id)
entities.accounts.readAll()
entities.accounts.update(id, ...data)
entities.accounts.delete(id)

// Store has an accounts object with well structured data
const mapState = ({ entities: { accounts } }) => ({
  accounts: accounts.allIds.map(id => accounts.byId[id]),
});
```
