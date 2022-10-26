import { useQuery } from "react-query";

interface DeliveryPoints {
  id: number,
  pointName: string,
  fiscalID: number,
  address: string,
  addessComplement: string,
}

interface DeliveryRoute {
  routeId: number,
  vehicleId: number,
  fleetId: number,
  driverName: string,
  helper1Name: string,
  helper2Name: string,
  helper3Name: string,
  loadId: string,
  beggingDate: Date,
  endingDate: Date,
}

function loadDeliveryRoute (file: string) {
  console.log(file)
  return
}

export default loadDeliveryRoute;