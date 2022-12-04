import { FinishCreateAccount } from "../components/finishCreateAccount";
import { userProviderState } from "../providers/userProvider";

export function MainPage() {
  const { user } = userProviderState();
  return (
    <>
      {!user.emailVerified || !user.username ? (
        <FinishCreateAccount />
      ) : (
        <>
          <div>welcome</div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quia
          cum nulla inventore atque vero? Nam animi ratione consequatur velit
          quos similique quas, laboriosam dicta veritatis quam, iure quo
          doloremque! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Fuga quia cum nulla inventore atque vero? Nam animi ratione
          consequatur velit quos similique quas, laboriosam dicta veritatis
          quam, iure quo doloremque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Fuga quia cum nulla inventore atque vero? Nam animi
          ratione consequatur velit quos similique quas, laboriosam dicta
          veritatis quam, iure quo doloremque! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Fuga quia cum nulla inventore atque
          vero? Nam animi ratione consequatur velit quos similique quas,
          laboriosam dicta veritatis quam, iure quo doloremque! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Fuga quia cum nulla
          inventore atque vero? Nam animi ratione consequatur velit quos
          similique quas, laboriosam dicta veritatis quam, iure quo doloremque!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quia
          cum nulla inventore atque vero? Nam animi ratione consequatur velit
          quos similique quas, laboriosam dicta veritatis quam, iure quo
          doloremque! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Fuga quia cum nulla inventore atque vero? Nam animi ratione
          consequatur velit quos similique quas, laboriosam dicta veritatis
          quam, iure quo doloremque!
        </>
      )}
    </>
  );
}
