import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { TouchableOpacityProps } from "react-native"
import { FlatListProps } from "react-native"

export type ButtonProps = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
}

export type TasksProps = {
    description: string;
    onChecked: boolean;
    id?: string;
    date: Date;
}

export type TasksData = {
    data: TasksProps;
    onPress?: () => void;
}

export type ListProps<T> = FlatListProps<T> & {
    emptyContent: React.ReactNode;
    id?: string;
}