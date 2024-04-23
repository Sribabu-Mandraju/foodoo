import { Card, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";


import { Model2 } from "../models/Model2";
 
const TABLE_HEAD = ["Name", "Email", "Message", "Subject","Phone","Date","Delete"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    email:"sribabu mandraju",
    message:"one two three ",
    subject:"subject 1",
    phone:"6303738847",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    email:"sribabu mandraju",
    message:"the process of producing young once is called balanced diet ",
    subject:"subject 1",
    phone:"6303738847",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    email:"sribabu mandraju",
    message:"the process of producing young once is called balanced diet ",
    subject:"subject 1",
    phone:"6303738847",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    email:"sribabu ribabu mandraju mandraju",
    message:"the process of producing young once is called balanced diet ",
    subject:"subject 1",
    phone:"6303738847",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    email:"sribabu mandraju",
    message:"the process of producing young once is called balanced diet ",
    subject:"subject 1",
    phone:"6303738847",
    date: "04/10/21",
  },
];
 
export const ContactTable = () => {
  return (
    <Card className="h-full w-[97%] md:w-[95%] mt-[40px] mx-auto overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead className="bg-black text-white">
          <tr className="bg-[black] text-white">
          <th
                className="border-b border-blue-gray-100 text-white p-4"
              >
                <Typography
                  variant="small"
                  color="white"
                  className=" leading-none text-white text-[17px] font-bold opacity-70"
                >
                    S.no
                </Typography>
              </th>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 text-white p-4"
              >
                <Typography
                  variant="small"
                  color="white"
                  className=" leading-none text-white text-[17px] font-bold opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, email, message,subject,phone,date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index+1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <div className="">
                        <Model2 button="view" children={message} title={subject} />
                    </div>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {subject}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {phone}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                <Button color="red" variant="outlined"><RiDeleteBin6Line className="text-2xl" /></Button>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}