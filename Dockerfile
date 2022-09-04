FROM denoland/deno:1.25.0 as builder
WORKDIR /app
COPY . /app
# SSG 機能により _site 生成
RUN deno task build

FROM denoland/deno:1.25.0
EXPOSE 8000
COPY --from=builder /app/_site /app
COPY --from=builder /app/import_map.json /app
COPY --from=builder /app/deno.json /app
COPY --from=builder /app/server.ts /app
WORKDIR /app
ENTRYPOINT ["deno", "task", "local-serve"]
