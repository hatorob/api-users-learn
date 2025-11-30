import { SearchInput } from "../dtos/common/search.dto";
import { PaginationInput } from "../dtos/common/pagination.dto";


declare global {
  namespace Express {
    interface Request {
      merged?: any; 
    }
  }
}