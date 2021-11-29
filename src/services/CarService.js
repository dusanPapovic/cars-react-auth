
import HttpService from './HttpService';

class CarService extends HttpService{

  async getAll() {
    try {
      const { data } = await this.client.get('cars');

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  async add(newCar) {
    try {
      // const transformedCar = {brand: newCar.brand, model: newCar.model, year: newCar.year, max_speed: newCar.maxSpeed, is_automatic: newCar.isAutomatic, engine: newCar.engine,number_of_doors:newCar.numberOfDoors, created_at:newCar.createdAt, updated_at:newCar.updatedAt };
      // console.log(transformedCar);
      const { data } = await this.client.post('cars', newCar);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(carId) {
    try {
      const { data } = await this.client.delete(`cars/${carId}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async get(id) {
    try {
      const { data } = await this.client.get(`cars/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async edit(id, newCar) {
    try {
      console.log(newCar);
      // const transformedCar = {brand: newCar.brand, model: newCar.model, year: newCar.year, max_speed: newCar.maxSpeed, is_automatic: newCar.isAutomatic, engine: newCar.engine,number_of_doors:newCar.numberOfDoors, created_at:newCar.createdAt, updated_at:newCar.updatedAt };
      // console.log(transformedCar);
      const { data } = await this.client.put(`cars/${id}`, newCar);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

export default new CarService();
