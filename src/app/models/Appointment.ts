import { User } from "./User";


export class Appointment {

            id : number;
            title : string;
            date_appointment  : string ; 
            endHour : string  ; 
            state : string
            start_hour : string ; 
            message : string ; 
            object : string ; 
            id_doctor : number ; 
            id_patient : number ; 
            note : number ;

      constructor( title : string, date_appointment  : string , endHour : string  ,   state : string , start_hour : string ,   message : string ,  object : string  ,  note : number )
            {
                this.title = title  
                this.date_appointment=date_appointment
                this.endHour=endHour
                this.start_hour = start_hour
                this.state = state, 
                this.message=message, 
                this.object=object
                this.note=note
               
                
            }
            

}