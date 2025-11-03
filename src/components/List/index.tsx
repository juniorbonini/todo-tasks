import { ListProps } from "@/@types/types";
import { FlatList, View } from "react-native";
import { Tasks } from "../Tasks";
import { TasksEmpty } from "../TasksEmpty";

export function List<T>({
  data,
  emptyContent,
  renderItem,
  id,
  ...rest
}: ListProps<T>) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<TasksEmpty />}
        showsVerticalScrollIndicator={false}
        {...rest}
      />
    </View>
  );
}
