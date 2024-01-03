import React from 'react';

export type CreateContextOptions<ContextType> = {
  initialValue?: ContextType;
  /**
   * If true, throw if the context is undefined.
   * @default true
   */
  strict?: boolean;
  /**
   * Message to throw if context is null | undefined
   */
  errorMessage?: string;

  /**
   * Context name
   */
  name: string;
};

export type CreateContextReturn<ContextType> = [React.Provider<ContextType>, () => ContextType, React.Context<ContextType>];

/**
 * Create a named context, provider, and hook.
 */
export const createContext = <ContextType>(options: CreateContextOptions<ContextType>) => {
  const { strict = true, initialValue, name } = options;
  const errorMessage = options.errorMessage || `[useContext]: '${name}' context is undefined. 'useContext' must be wrapped within its provider.`;

  const Context = React.createContext<ContextType | undefined>(initialValue);

  Context.displayName = name;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context && strict) {
      throw new Error(errorMessage);
    }

    return context;
  };

  return [Context.Provider, useContext, Context] as CreateContextReturn<ContextType>;
};
