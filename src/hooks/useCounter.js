import Swal from "sweetalert2";

const useCounter = (STEP, MIN, MAX,cantidad, setCantidad) => {

    const handleChange = (e) => {
        setCantidad(+e.target.value)
       };
     
       const handleDecrement = () => {
     
         const valor = cantidad - STEP
     
         if(cantidad <= MIN ){
           return Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El valor no es valido',
            });
           
         }
         setCantidad( valor );
       }
     
       const handleIncrement = () => {
     
         const valor = cantidad + STEP
     
         if(cantidad >= MAX ){
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El valor no es valido',
          });
         }
         setCantidad( valor );
       }

    return {
        handleChange,
        handleDecrement,
        handleIncrement
    }
}

export default useCounter
