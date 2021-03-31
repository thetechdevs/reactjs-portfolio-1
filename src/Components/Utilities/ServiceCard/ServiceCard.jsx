import Dialogs from "../metarial/Dailog";
import ServiceCardStyle from "./ServiceCard.module.scss";

const ServiceCard = ({ icon, title }) => {
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

        <Dialogs openBtn={"View Project"} title="Project Details" />
      </div>
    </div>
  );
};

export default ServiceCard;
