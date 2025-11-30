import { z } from "zod";
import { PaginationDto } from "../common/pagination.dto";
import { SearchDto } from "../common/search.dto";

export const SearchUsersDto = PaginationDto.merge(SearchDto);
export type SearchUsersInput = z.infer<typeof SearchUsersDto>;