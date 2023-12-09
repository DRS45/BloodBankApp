import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole blood components). Donation may be of whole blood, or of specific components directly (apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.

Today in the developed world, most blood donors are unpaid volunteers who donate blood for a community supply. In some countries, established supplies are limited and donors usually give blood when family or friends need a transfusion (directed donation). Many donors donate for several reasons, such as a form of charity, general awareness regarding the demand for blood, increased confidence in oneself, helping a personal friend or relative, and social pressure. Despite the many reasons that people donate, not enough potential donors actively donate. However, this is reversed during disasters when blood donations increase, often creating an excess supply that will have to be later discarded. In countries that allow paid donation some people are paid, and in some cases there are incentives other than money such as paid time off from work. People can also have blood drawn for their own future use (autologous donation). Donating is relatively safe, but some donors have bruising where the needle is inserted or may feel faint.

Potential donors are evaluated for anything that might make their blood unsafe to use. The screening includes testing for diseases that can be transmitted by a blood transfusion, including HIV and viral hepatitis. The donor must also answer questions about medical history and take a short physical examination to make sure the donation is not hazardous to their health. How often a donor can donate varies from days to months based on what component they donate and the laws of the country where the donation takes place. For example, in the United States, donors must wait 56 days (eight weeks) between whole-blood donations but only seven days between platelet apheresis donations[1] and twice per seven-day period in plasmapheresis.

The amount of blood drawn and the methods vary. The collection can be done manually or with automated equipment that takes only specific components of the blood. Most of the components of blood used for transfusions have a short shelf life, and maintaining a constant supply is a persistent problem. This has led to some increased interest in autotransfusion, whereby a patient's blood is salvaged during surgery for continuous reinfusion—or alternatively, is self-donated prior to when it will be needed. Generally, the notion of donation does not refer to giving to one's self, though in this context it has become somewhat acceptably idiomatic.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
