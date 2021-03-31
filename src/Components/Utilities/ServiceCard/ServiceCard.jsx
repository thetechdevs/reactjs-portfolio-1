import Dialogs from "../metarial/Dailog";
import ServiceCardStyle from "./ServiceCard.module.scss";
import Typography from "@material-ui/core/Typography";

const ServiceCard = ({ icon, title }) => {
  const dialogCard = (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "180px" }}
      >
        <img
          src={"https://i.ibb.co/Wf1HVc3/car3.jpg"}
          alt="project images"
          style={{ height: "100%", borderRadius: "50%" }}
        />
      </div>
      <Typography variant="h6" color="initial" style={{ fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        tempora aut amet distinctio .
      </Typography>
    </div>
  );

  return (
    <div className={ServiceCardStyle.ServiceCardMain}>
      <div className={ServiceCardStyle.ServiceCardMain__container}>
        {icon}
        <h4 className={ServiceCardStyle.ServiceCardMain__container__title}>
          {title}
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          tempora aut amet distinctio .
        </p>

        <Dialogs
          openBtn={"View Project"}
          title="Project Details"
          children={dialogCard}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
