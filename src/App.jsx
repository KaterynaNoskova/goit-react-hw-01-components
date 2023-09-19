import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

import userJS from '../src/user.json';
import statisticJS from '../src/data.json';
import friendJS from '../src/friends.json';
import transactionJS from '../src/transactions.json';

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
