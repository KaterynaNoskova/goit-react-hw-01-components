import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

import userJS from './components/Profile/user.json';
import statisticJS from './components/Statistics/data.json';
import friendJS from './components/Friend/friends.json';
import transactionJS from './components/Transaction/transactions.json';

const { username, tag, location, avatar, stats} = userJS;
const statistics = statisticJS;
const friends = friendJS;
const transactions = transactionJS.map(transaction => ({
  ...transaction,
  amount: Number(transaction.amount),
}));

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
