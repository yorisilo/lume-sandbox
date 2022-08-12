import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const App: FC<Props> = ({ title, children }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default App;
