import client from "../Utils/client";

export const fetchTransactions = async () => {
  const res = await client.get();
  const { data } = await res;
  //   setTransactions(data);
  return data;
};

export const postTransactions = async ({
  name,
  email,
  date_of_birth,
  address,
  contact_no,
  business_name,
}) => {
  const data = {
    name,
    email,
    date_of_birth,
    address,
    contact_no,
    business_name,
  };
  await client.post("", data).then((res) => console.log(res));
};

export const deleteTransactions = async (id) => {
  await client.delete(`/${id}`).then((res) => console.log(res));
};
