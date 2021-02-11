import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Task 1 Profile</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Task 2 Statistics</h1>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <h1>Task 3 FriendList</h1>
      <FriendList friends={friends} />
      <h1>Task 4 TransactionHistory</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
